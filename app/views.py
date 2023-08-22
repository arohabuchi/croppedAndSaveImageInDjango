from django.shortcuts import render
from .models import img 
from .forms import ImgForm
from django.http import JsonResponse

# Create your views here.
def index(request):
    form = ImgForm(request.POST or None, request.FILES or None)
    if form.is_valid():
        form.save()
        return JsonResponse({'message':'item save'})
    # obj = img.objects.get(pk=1)
    return render(request, 'app/index.html', locals())