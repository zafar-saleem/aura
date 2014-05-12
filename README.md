Flow is a CSS framework that allows to write Modular & component base CSS(inspired from Smacss 'http://smacss.com/'). It splits
CSS framework into 5 layers as Smacss suggests to split it into 5 but with one exception i.e. the 5th layer here is 'utilities'
rather than State(as in Smacss). Feel free to add 'State' layer as 6th layer or swap it with 'utilities'.
<h1>Pre-requisites</h1>
Flow requires Sass and compass to be installed on your machines in order to use it.
<h1>How it works</h1>
Following are the description of each layer based on Smacss.
<ul>
    <li>Base: This layer consists of base rules such as Normalizer.css</li>
    <li>Layout: It consists of layout related rules such as grid system, header, footer.</li>
    <li>Modules: All of the modules(button, lightbox) rules goes to this layer.</li>
    <li>Theme: Theme layer consists of design related rules for modules.</li>
    <li>Utilities: It consists of decalring global variables and some other Sass rules.</li>
</ul>

