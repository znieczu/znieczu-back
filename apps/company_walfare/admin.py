from django.contrib import admin

# Register your models here.
from apps.company_walfare.models import Company


@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    list_display = ('name', 'address')
    fieldsets = (
        (None, {
            'fields': ('name', 'address', )
        }),
    )
