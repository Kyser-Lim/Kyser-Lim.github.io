var slideIndex = 0;
showSlides();

function showSlides()
{
	var i;
	var slides = document.getElementsByClassName("mySlides");

	for(i = 0; i < slides.length; i++)  //initializes pictures to none
	{
		slides[i].style.display = "none";
	}

	if(slideIndex == slides.length)
	{
		slideIndex = 0;
	}

	slides[slideIndex].style.display = "block"; //activate picture
	slideIndex++; //increment so next time will display the next one

	setTimeout(showSlides, 2000);
}