# poi_app/views.py
from django.shortcuts import render
from .models import PointOfInterest

def poi_list(request):
    category = request.GET.get('category', 'all')
    if category == 'all':
        pois = PointOfInterest.objects.all()
    else:
        pois = PointOfInterest.objects.filter(category=category)
    return render(request, 'poi_app/poi_list.html', {'pois': pois, 'category': category})
