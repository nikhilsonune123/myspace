from django.http import HttpResponseRedirect
from django.shortcuts import render
from blog.models import Post, Comment
from blog.forms import CommentForm

def blog_detail(request, pk):
    post = Post.objects.get(pk=pk)
    form = CommentForm()
    if request.method == "POST":
        form = CommentForm(request.POST)
        if form.is_valid():
            comment = Comment(
                author=form.cleaned_data["author"],
                body=form.cleaned_data["body"],
                post=post,
            )
            comment.save()
            return HttpResponseRedirect(request.path_info)

    comments = Comment.objects.filter(post=post)
    context = {
        "post": post,
        "comments": comments,
        "form": CommentForm(),
    }
    return render(request, "pages/blog-detail.html", context)

def blog_index(request):
    posts = Post.objects.all()
    print(posts)
    context = {
        "posts": posts,
    }
    return render(request, "pages/blogs.html", context)

def index(request):
    return render(request, 'pages/index.html')


# def blog_detail(request, pk):
#     post = Post.objects.get(pk=pk)
#     comments = Comment.objects.filter(post=post)
#     context = {
#         "post": post,
#         "comments": comments,
#     }

