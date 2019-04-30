from django.db import models


class Company(models.Model):
    name = models.CharField(max_length=40)
    address = models.CharField(max_length=40)

    class Meta:
        app_label = 'company_walfare'
        verbose_name_plural = 'Companies'
        ordering = ('name', 'address')
        unique_together = ('name', 'address')

    def __str__(self):
        return self.name
