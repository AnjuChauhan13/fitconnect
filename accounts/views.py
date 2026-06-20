from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view,permission_classes
from .serializers import RegisterSerializer,ProfileSerializer
from rest_framework.permissions import IsAuthenticated


@api_view(['GET'])
def home(request):
    return Response({
        "message": "Welcome to FitConnect"
    })

@api_view(["POST"])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(
            {"message": "User registered successfully"},
            status=status.HTTP_201_CREATED
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST
)
    
@api_view(["GET","PUT"])
@permission_classes([IsAuthenticated])
def profile_view(request):
    profile= request.user.profile
    if request.method=="GET":
        serializer= ProfileSerializer(profile)
        return Response(serializer.data)
    if request.method=="PUT":
        serializer=ProfileSerializer(profile,data=request.data,partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(
              serializer.data,
                status=status.HTTP_200_OK
                
            )
    return Response(
        serializer.data,status=status.HTTP_400_BAD_REQUEST
        
    )




