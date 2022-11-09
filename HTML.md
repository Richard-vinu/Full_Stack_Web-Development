HTML Semantic Tag Structure
The following HTML tags can be used to break your page into identified parts:


``header``: it defines a header for a web page.<br>
``nav``: It defines a container for navigation links.<br>
``section``: This defines a section in a web page.<br>
``article``: This element contains the main part, containing information about the web page.<br>
``aside``: The aside content is often placed as a sidebar in a document.<br>
``footer``: It defines a footer for a document or a section.

1) What is HTML?
HTML stands for Hyper Text Markup Language. It is a language of World Wide Web. It is a standard text formatting language which is used to create and display pages on the Web. It makes the text more interactive and dynamic. It can turn text into images, tables, links. More details.

2) What are Tags?
HTML tags are composed of three things: an opening tag, content and ending tag. Some tags are unclosed tags.

HTML documents contain two things:

content, and
tags
AD
When a web browser reads an HTML document, the browser reads it from top to bottom and left to right. HTML tags are used to create HTML documents and render their properties. Each HTML tags have different properties.

Syntax
<tag> content </tag>  
Content is placed between tags to display data on the web page.

More details.
20) What is a marquee?
Marquee is used to put the scrolling text on a web page. It scrolls the image or text up, down, left or right automatically. You should put the text which you want to scroll within the <marquee>......</marquee> tag. More details.

21) How many tags can be used to separate a section of texts?

Date
Datetime-local
Email
Time
Url
Range
Telephone
Number
Search
32) Is there any need to change the web browsers to support HTML5?
No. Almost all browsers (updated versions) support HTML 5. For example Chrome, Firefox, Opera, Safari, IE.

33) Which type of video formats are supported by HTML5?
HTML 5 supports three types of video format:

mp4
WebM
Ogg
More details.
34) Is audio tag supported in HTML 5?
Yes. It is used to add sound or music files on the web page. There are three supported file formats for HTML 5 audio tag.

mp3
WAV
Ogg
Let's see the code to play mp3 file using HTML audio tag.

<audio controls>    
  <source src="koyal.mp3" type="audio/mpeg">    
Your browser does not support the html audio tag.    
</audio>    
Instead of koyal.mp3, you can pass any mp3 file name.

More details.
35) What is the difference between progress and meter tag?
The progress tag is used to represent the progress of the task only while the meter tag is used to measure data within a given range. More details.

36) What is the use of figure tag in HTML 5?
The figure tag is used to add a photo in the document on the web page. It is used to handle the group of diagrams, photos, code listing with some embedded content.

<p>The Taj Mahal is widely recognized as "the jewel of Muslim art in India and one of the universally admired masterpieces of the world's heritage."</p>    
<figure>    
  <img src="htmlpages/images/tajmahal.jpg" alt="Taj Mahal"/>    
</figure>     
More details.
37) What is the use of figcaption tag in HTML 5?
The <figcaption> element is used to provide a caption to an image. It is an optional tag and can appear before or after the content within the <figure> tag. The <figcaption> element is used with <figure> element and it can be placed as the first or last child of the <figure> element.

<figure>    
  <img src="htmlpages/images/tajmahal.jpg" alt="Taj Mahal"/>    
<figcaption>Fig.1.1 - A front view of the great Taj Mahal in Agra.</figcaption>    
</figure>      
More details.
38) What is button tag?
The button tag is used in HTML 5. It is used to create a clickable button within the HTML form on the web page. It is generally used to create a "submit" or "reset" button. Let's see the code to display the button.

<button name="button" type="button">Click Here</button>    
More details.
39) What is the use of details and summary tag?
The details tag is used to specify some additional details on the web page. It can be viewed or hidden on demand. The summary tag is used with details tag. More details.

40) What is datalist tag?
The HTML 5 datalist tag provides an autocomplete feature on the form element. It facilitates users to choose the predefined options to the users to select data.

<label>    
 Enter your favorite cricket player: Press any character<br />    
 <input type="text" id="favCktPlayer" list="CktPlayers">    
 <datalist id="CktPlayers">    
 <option value="Sachin Tendulkar">    
 <option value="Brian Lara">    
 <option value="Jacques Kallis">     
 <option value="Ricky Ponting">     
 <option value="Rahul Dravid">     
 <option value="Shane Warne">     
 <option value="Rohit Sharma">     
 <option value="Donald Bradman">     
 <option value="Saurav Ganguly ">     
 <option value="AB diVilliers">     
 <option value="Mahendra Singh Dhoni">     
 <option value="Adam Gilchrist">    
 </datalist>    
</label>     
