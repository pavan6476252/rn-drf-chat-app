from django.contrib.auth.models import AbstractUser

from django.db import models

# Create your models here.


def upload_thubnail(instace, filename):
    path = f'thubnails/{instace.username}'
    extension = filename.split('.')[-1]
    if extension:
        path = path+'.'+extension
    return path


class User(AbstractUser):
    thubnail = models.ImageField(upload_to=upload_thubnail,
                                 null=True, blank=True)
