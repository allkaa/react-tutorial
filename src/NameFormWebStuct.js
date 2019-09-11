// NB! Capitalize custom components name to differentiate them from regular HTML elements).
import React, { Component } from 'react'

// Custom Controlled Component:
class NameForm extends Component {
  constructor(props) {
    console.log('========> NameForm constructor <==========')
    super(props);
    this.state = {
      name:
        'Alex Raven',
      essay:
        '',
      fruit:
        ['Coconut','Lime']
    }; // very initial value.
    console.log(this.state.name);
    console.log(this.state.essay);
    console.log(this.state.fruit);
  }

  // Code is invoked after the component is mounted/inserted into the DOM tree.
  componentDidMount() {
    console.log('========> NameForm componentDidMount <==========')
    console.log(this.state.name);
    this.setState({name: this.state.name.toUpperCase()})
    console.log(this.state.name);
    console.log(this.state.essay);
    console.log(this.state.fruit);
  }

  render() {
    return (
    <div>

      <nav>
        <h1>nav</h1>
        <ul>
          <li><a href="#1">Home</a></li>
          <li><a href="#2">Our team</a></li>
          <li><a href="#3">Projects</a></li>
          <li><a href="#4">Contact</a></li>
        </ul>

        {/*<!-- A Search form is another commmon non-linear way to navigate through a website. -->*/}
        <p>Search form in nav</p>
        <form>
          <input type="search" name="q" placeholder="Search query"/>
          <input type="submit" value="Go!"/>
        </form>
      </nav>

      {/*<!-- Here is our page's main content -->*/}
      <main>

      <h1>Main</h1>

      {/*<!-- It contains an article -->*/}
      <article>
        
        <h2>Article heading h2</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut porta lorem lacinia consectetur.</p>
        
        <section>
          <h3>Section 1</h3>
          <p>Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.</p>
          <p>Pelientesque auctor nisi id magna consequat sagittis. Curabitur dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet. Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.</p>
        </section>

        <section>
        <h3>Subsection 2</h3>
        <p>Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum soclis natoque penatibus et manis dis parturient montes, nascetur ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in est.</p>
        <p>Vivamus fermentum semper porta. Nunc diam velit, adipscing ut tristique vitae sagittis vel odio. Maecenas convallis ullamcorper ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi diam iaculis velit, is fringille sem nunc vet mi.</p>
        </section>

      </article>

      {/*<!-- the aside content can also be nested within the main content -->*/}
      <aside>
        <h2>Related aside in main</h2>

        <ul>
          <li><a href="#11">Oh I do like to be beside the seaside</a></li>
          <li><a href="#12">Oh I do like to be beside the sea</a></li>
          <li><a href="#13">Although in the North of England</a></li>
          <li><a href="#14">It never stops raining</a></li>
          <li><a href="#15">Oh well...</a></li>
        </ul>
      </aside>

      </main>
  
    </div> 
    );
  }
}

export default NameForm