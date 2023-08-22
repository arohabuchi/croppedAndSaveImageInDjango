from django.db import models

# Create your models here.
class img(models.Model):
    file_title = models.CharField(max_length=50, default="image")
    img_file = models.ImageField(upload_to="pictures")
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return (self.file_title )