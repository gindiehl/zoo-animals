![screenshot](resources/images/cheetah.png)

# ZOO ANIMALS
This app supports zoo staff in logging and tracking admitted animals.  

## MVP Specifications
| Behavior                   | Input Example     | Output Example    |
| -------------------------- | -----------------:| -----------------:|
|The program takes user input to log newly-admitted animals and lists them out|Species: "Arctic Fox"
Name: "Moon"
Age: 2
Diet: "Carnivore"
Location: "Northern Trail"
Caretakers: 5
Sex: "Female"
Likes: "Cool shade"
Dislikes: "Loud noises"|Species: "Arctic Fox"
Name: "Moon"
Age: 2
Diet: "Carnivore"
Location: "Northern Trail"
Caretakers: 5
Sex: "Female"
Likes: "Cool shade"
Dislikes: "Loud noises"|
|The program allows users to click on an animal to edit its properties.|click on "Arctic Fox", 'Caretakers: 6'|Caretakers: 6|
|The program offers options to view all animals, only young animals (less than 2 years of age), or only mature animals (more than 2 years of age)|click on "Show Young Animals"|results for young animals display|

## Further Specifications
|The program adds & displays total number of caretakers needed in a day|number of Caretakers|total Caretakers needed|
|The program differentiates between animals' species|click on 'Reptiles'|animals classified as Reptiles display|
|The program differentiates between animals' diet types|click on 'Omnivores'|animals logged as Omnivores display|
|The program records the date each animal was admitted|'Date Admitted: 03/12/2017'|Date Admitted: 03/12/2017|


### Setup/Installation Requirements
* clone <https://github.com/jinjin8/zoo-animals>
* cd <zoo-animals>
* run this series of commands:
  * `$ npm install`
  * `$ bower install`
  * `$ gulp build`
  * `$ gulp serve`

## Prerequisites
You will need the following things properly installed on your computer.
* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [PhantomJS](http://phantomjs.org/)  

### Known Bugs
N/A

### Technologies Used
* HTML
* CSS, Bootstrap
* JavaScript
* TypeScript
* Node.js
* Angular2

### Support and contact details
_jincamou@gmail.com_

### License
_MIT_ &copy; _2017_ **jin camou**
