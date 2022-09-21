
$(document).ready(function(){
    $("#myModal").hide();
    $("button").hover(function(){
        $(this).css("color", "red");
        },
        function(){
        $(this).css("color", "white");
        });
    $(".detail").click(function(){
        var id = $(this).attr('id');
        switch(id){
            case 'detail1':
                $("#bookTitle").text("Curious george learns the Alphabets");
                $("#bookAuthor").text("Margret Rey H. A. Rey");
                $("#bookPublisher").text("HMH Books for Young Readers");
                $("#bookAge").text("2-3 years");
                $("#bookImage").attr("src", "images/book1.png");
                break;
            case 'detail2':
                $("#bookTitle").text("Pete the cat I love my white shoes");
                $("#bookAuthor").text("James Dean, Eric Litwin, Kimberly Dean");
                $("#bookPublisher").text("HarperCollins");
                $("#bookAge").text("3-4 years");
                $("#bookImage").attr("src", "images/book2.png");
                break;
            case 'detail3':
                $("#bookTitle").text("Tom and jerry meet little quack ");
                $("#bookAuthor").text("Metro-Goldwyn-Mayer");
                $("#bookPublisher").text("Golden books");
                $("#bookAge").text("2-5 years");
                $("#bookImage").attr("src", "images/book3.png");
                break;
            case 'detail4':
                $("#bookTitle").text("The Berenstain bears go to the doctor ");
                $("#bookAuthor").text("Stan Berenstain");
                $("#bookPublisher").text("Random House Books for Young Readers");
                $("#bookAge").text("2-4 years");
                $("#bookImage").attr("src", "images/book4.png");
                break;
            default:
                break;       
        }
        $("#myModal").show();
        $("#closeButton").click(function(){
            $("#myModal").hide();
        });
    })
})   
