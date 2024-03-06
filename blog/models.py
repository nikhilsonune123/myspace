from django.db import models
from datetime import datetime

class Category(models.Model):
    name = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Post(models.Model):
    title = models.CharField(max_length=255)
    heading1 = models.CharField(max_length=255, blank=True)
    para1 = models.TextField(blank=True)
    heading2 = models.CharField(max_length=255, blank=True)
    para2 = models.TextField(blank=True)
    heading3 = models.CharField(max_length=255, blank=True)
    para3 = models.TextField(blank=True)
    heading4 = models.CharField(max_length=255, blank=True)
    para4 = models.TextField(blank=True)
    heading5 = models.CharField(max_length=255, blank=True)
    para5 = models.TextField(blank=True)
    heading6 = models.CharField(max_length=255, blank=True)
    para6 = models.TextField(blank=True)
    created_on = models.DateTimeField(auto_now_add=True)
    # creation_Date = models.CharField(max_length=100,default=datetime.now, blank=True)
    last_modified = models.DateTimeField(auto_now=True)
    categories = models.ManyToManyField("Category", related_name="posts"),
    photo_main = models.ImageField(upload_to='photos/%Y/%m/%d/', blank=True)
        
    def __str__(self):
        return self.title

class Comment(models.Model):
    author = models.CharField(max_length=60)
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    post = models.ForeignKey("Post", on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.author} on '{self.post}'"