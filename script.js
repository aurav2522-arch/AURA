window.onscroll = function() {
    let thread = document.getElementById("thread-line");
    
    // حساب نسبة النزول في الصفحة
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    // تحديث طول الخيط بناءً على السكرول
    // ضربنا في 80 أو رقم معين عشان يفضل متناسق مع طول الصفحة
    thread.style.height = scrolled + "vh"; 
};