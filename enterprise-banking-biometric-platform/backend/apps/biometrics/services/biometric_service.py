from deepface import DeepFace

class BiometricService:

    @staticmethod
    def generate_embedding(image_path):

        response = DeepFace.represent(
            img_path=image_path,
            model_name='Facenet512',
            enforce_detection=False
        )

        return response[0]['embedding']

    @staticmethod
    def analyze_group_photo(image_path):

        results = []

        faces = DeepFace.represent(
            img_path=image_path,
            model_name='Facenet512',
            detector_backend='opencv',
            enforce_detection=False
        )

        for face in faces:

            results.append({
                "embedding_size": len(face["embedding"])
            })

        return results
