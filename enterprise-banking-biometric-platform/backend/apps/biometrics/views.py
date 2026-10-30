from rest_framework.views import APIView
from rest_framework.response import Response

class VerifyAPIView(APIView):

    def post(self, request):
        return Response({
            "message": "Verification endpoint working"
        })
