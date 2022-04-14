from django.db import models

class Todo(models.Models):
    title = models.Charfiled(max_length=120)
    description= models.TextField()
    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title
