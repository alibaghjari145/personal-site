import React from 'react'
import Typist from 'react-typist';
import SkillBox from './skillbox'
import js from './../img/js.svg'
import html from './../img/html.svg'
import css from './../img/css.svg'
import react from './../img/reactjs.svg'
import git from './../img/git.svg'
import tailwind from './../img/tailwind.svg'
import sass from './../img/sass.svg'



class Skills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            box: [

            ],
            Array: [
                { id: 1, title: 'Reactjs', img: <img src={react} alt="js" />, color: '#61dafb', pers: '60' },
                { id: 2, title: 'javascript', img: <img src={js} alt="js" />, color: '#f7df1e', pers: '75' },
                { id: 3, title: 'HTML', img: <img src={html} alt="js" />, color: '#e44d26', pers: '80' },
                { id: 4, title: 'css', img: <img src={css} alt="js" />, color: '#2196f3', pers: '85' },
                { id: 5, title: 'Tailwind', img: <img src={tailwind} alt="js" />, color: '#45aab3', pers: '70' },
                { id: 6, title: 'Sass', img: <img src={sass} alt="js" />, color: '#cf649a', pers: '65' },
                { id: 7, title: 'Git', img: <img src={git} alt="js" />, color: '#e34c26 ', pers: '40' },

            ]

        }
    }

    componentDidMount() {
        setInterval(() => {
            if (this.state.Array.length > this.state.box.length) {
                let i = this.state.box.length;
                let box = [...this.state.box];
                box.push(this.state.Array[i]);
                this.setState({ box })
            }
        }, 300);
    }

    render() {
        const { box } = this.state;
        return (
            <div className='skills content'>
                <h2>
                    <Typist avgTypingDelay={120} className='my-title' >
                        The most importants:
                    </Typist>
                </h2>
                {box.map(
                    box => (<SkillBox
                        key={box.id}
                        title={box.title}
                        pers={box.pers}
                        color={box.color}
                        id={box.id}
                    >
                        {box.img}


                    </SkillBox>)
                )}
            </div>
        )
    }

}
export default Skills