document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    // الحصول على قيم الحقول
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // عرض رسالة تأكيد
    alert(شكرًا ${name}، تم استلام رسالتك بنجاح!);

    // إعادة تعيين النموذج (اختياري)
    document.getElementById('contactForm').reset();
});