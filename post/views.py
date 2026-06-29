from django.shortcuts import render
from .models import Post
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from .serializers import PostSerializer
from rest_framework.response import Response
from rest_framework import status

class PostModelviewset(APIView):
    permission_classes=[IsAuthenticated]

    def get(self,request,format=None):
        post= Post.objects.all().order_by("-created_at")
        serializer=PostSerializer(post,many= True)
        return Response(serializer.data)
    
    def post(self,request,format=None):
        serializer=PostSerializer(data=request.data)
        if serializer.is_valid():
           serializer.save(user=request.user)
           return Response(serializer.data,status=status.HTTP_200_OK)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def put(self, request, pk, format=None):

        try:
            post = Post.objects.get(pk=pk)

        except Post.DoesNotExist:
            return Response(
                {"error": "Post not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        # Check ownership
        if post.user != request.user:
            return Response(
                {"error": "Permission denied"},
                status=status.HTTP_403_FORBIDDEN
            )

        serializer = PostSerializer(
            post,
            data=request.data,
            partial=True
        )

        if serializer.is_valid():
            serializer.save()

            return Response(
                serializer.data,
                status=status.HTTP_200_OK
            )

        return Response(
            serializer.errors,
            status=status.HTTP_400_BAD_REQUEST
        )
    def delete(self, request, pk, format=None):

        try:
            post = Post.objects.get(pk=pk)

        except Post.DoesNotExist:
            return Response(
                {"error": "Post not found"},
                status=status.HTTP_404_NOT_FOUND
            )

        if post.user != request.user:
            return Response(
                {"error": "Permission denied"},
                status=status.HTTP_403_FORBIDDEN
            )

        post.delete()

        return Response(
            {"message": "Post deleted successfully"},
            status=status.HTTP_204_NO_CONTENT
        )