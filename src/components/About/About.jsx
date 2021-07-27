import React from 'react';
import './About.scss';
import Profile from './Profile/Profile'
import OldPeopleBurning from '../../img/oldpeopleburning.gif'

function JeffText() {
  return `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam pellentesque nec nam aliquam sem et. Commodo ullamcorper a lacus vestibulum sed. Vel fringilla est ullamcorper eget nulla facilisi etiam. Sit amet cursus sit amet dictum sit amet justo. Dolor morbi non arcu risus quis varius quam quisque. Mauris commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Augue eget arcu dictum varius duis at. Elit at imperdiet dui accumsan. Felis bibendum ut tristique et egestas quis ipsum. Viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Amet nulla facilisi morbi tempus iaculis. Ac odio tempor orci dapibus ultrices in iaculis nunc. Praesent semper feugiat nibh sed pulvinar. Sit amet consectetur adipiscing elit.
  Tortor aliquam nulla facilisi cras fermentum. Cras fermentum odio eu feugiat pretium. Arcu risus quis varius quam quisque id diam. Nibh praesent tristique magna sit. Accumsan sit amet nulla facilisi morbi tempus iaculis. Pretium quam vulputate dignissim suspendisse. Convallis a cras semper auctor neque vitae. Pretium viverra suspendisse potenti nullam. Quis blandit turpis cursus in hac habitasse. Metus dictum at tempor commodo ullamcorper. Mi proin sed libero enim sed faucibus turpis in eu. Ac placerat vestibulum lectus mauris ultrices eros in. Vestibulum morbi blandit cursus risus at ultrices. Magna eget est lorem ipsum. Etiam tempor orci eu lobortis. Pulvinar etiam non quam lacus suspendisse faucibus interdum posuere.
  `
}

function SteveText() {
  return `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed odio morbi quis commodo odio aenean sed adipiscing. Proin libero nunc consequat interdum varius sit amet. Orci eu lobortis elementum nibh tellus. Pellentesque habitant morbi tristique senectus et netus et. Justo donec enim diam vulputate ut pharetra sit amet aliquam. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper. Non arcu risus quis varius quam quisque id diam. Semper risus in hendrerit gravida rutrum quisque. Mi bibendum neque egestas congue quisque egestas diam in. Vitae aliquet nec ullamcorper sit amet. Felis imperdiet proin fermentum leo vel orci porta non pulvinar. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit.
  `
}

function BryanText() {
  return `
  Risus quis varius quam quisque. Consequat interdum varius sit amet. Nulla posuere sollicitudin aliquam ultrices sagittis orci a. Vitae purus faucibus ornare suspendisse sed nisi lacus sed viverra. Nec ultrices dui sapien eget mi. Felis bibendum ut tristique et egestas quis. Bibendum neque egestas congue quisque egestas diam in. Nunc sed augue lacus viverra vitae congue eu. Mi proin sed libero enim. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Lorem ipsum dolor sit amet consectetur adipiscing. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Dapibus ultrices in iaculis nunc.
  Dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Tincidunt dui ut ornare lectus. Facilisi etiam dignissim diam quis. Leo in vitae turpis massa sed elementum tempus egestas sed. Aliquam id diam maecenas ultricies mi eget. Ultricies integer quis auctor elit sed vulputate. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Purus viverra accumsan in nisl nisi scelerisque eu ultrices vitae. Integer quis auctor elit sed vulputate mi sit amet. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Ut eu sem integer vitae justo eget. Amet justo donec enim diam. Et egestas quis ipsum suspendisse ultrices gravida dictum.
  `
}

function About() {
  return (
    <div className="about">
      <header className="about-header">
        <h2>About Us</h2>
      </header>
      <div className="profiles">
        <Profile image={OldPeopleBurning} name='Jeff Lutz' role='President & Chief Executive Officer' text={JeffText()}/>
        <Profile image={OldPeopleBurning} name='Steve Lutz' role='Chief Financial Officer' text={SteveText()}/>
        <Profile image={OldPeopleBurning} name='Bryan Lutz' role='Chief Technical Officer' text={BryanText()}/>
      </div>
    </div>
  );
}

export default About;
