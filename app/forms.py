from django import forms
from .models import img

class ImgForm(forms.ModelForm):
    class Meta:
        model = img
        fields = ('img_file',)