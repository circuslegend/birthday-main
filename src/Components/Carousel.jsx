import React, { useEffect, useState, Children } from "react";
import { cloneElement } from "react";
import { FaChevronLeft, FaChevronRight, FaCircle  } from 'react-icons/fa';
import ReactDOMServer from 'react-dom/server'
import "./Carousel.css"
import { useRef } from "react";

export const Carousel = ({children}) => {

    const PAGE_WIDTH = 80;

    const [pages, setPages] = useState();
    const [move, setMove] = useState(0);
    const [navs, setNavs] = useState([]);
   
    const handleClick = event => {
        let ind =event.currentTarget.id;
        setMove( (currentMove) => {
            const newMove = -1*PAGE_WIDTH*ind;
            return newMove;
        })
        let newMove2=-1*PAGE_WIDTH*ind;
        setNavs( (currentNav) => {
            return currentNav.map((e,i)=>{
                if ( e.props.id == ind ) {
                    return <FaCircle key={i} id={i} size ={20} color={'#1B0773'} className={"btns"} onClick={handleClick}/>   
                } else {
                    return <FaCircle key={i} id={i} size ={20} color={'white'} className={"btns"} onClick={handleClick}/>
                }
            });
            
        } )

      };

    


    const onLeftArrowClick = () => {
        if (move!=0) {
            setMove( (currentMove) => {
            const newMove = currentMove + PAGE_WIDTH;
            return newMove;
        } )
            setNavs( (currentNav) => {
            return currentNav.map((e,i)=>{
                if ( e.props.id == Math.abs(move/PAGE_WIDTH)-1 ) {

                    return <FaCircle key={i} id={i} size ={20} color={'#1B0773'} className={"btns"} onClick={handleClick}/>
                    
                } else if ( e.props.id == Math.abs(move/PAGE_WIDTH) ) {
  
                    return <FaCircle key={i} id={i} size ={20} color={'white'} className={"btns"} onClick={handleClick}/>
                } else {
                    return e;
                }
            });
            
        } )
        }
    }

    const onRightArrowClick = () => {
        if (move!=-PAGE_WIDTH*(children.length-1)) {
            setMove( (currentMove) => {
            const newMove = currentMove - PAGE_WIDTH;
            return newMove;
        })  ;
        setNavs( (currentNav) => {
            return currentNav.map((e,i)=>{
                if ( e.props.id == (Math.abs((move-PAGE_WIDTH)/PAGE_WIDTH)) ) {
                    return <FaCircle key={i} id={i} color={'#1B0773'} size ={20} className={"btns"} onClick={handleClick}/>
                } else if ( e.props.id == (Math.abs((move/PAGE_WIDTH)))) {
                    return <FaCircle key={i} id={i} color={'white'} size ={20} className={"btns"} onClick={handleClick}/>
                } else {
                    return e;
                }
            });         
        } );     
        }

    }



    useEffect( () => {
        for ( let i=0; i<children.length;i++){
        setNavs( (currentNav) => {
            if (i==0){
                return [...currentNav, <FaCircle key={i} id={i} size ={20} color={'#1B0773'} className={"btns"} onClick={handleClick}/> ]
            } else {
                return [...currentNav, <FaCircle key={i} id={i} size ={20} color={'white'} className={"btns"} onClick={handleClick}/> ]
            }
            
        }
        )
    }
        setPages(
            Children.map(children, child =>{
                return cloneElement(child, {
                    style: {
                        height:'100%',
                        minWidth:`${PAGE_WIDTH}vw`,
                        maxWidth:`${PAGE_WIDTH}vw`,
                    }
                })
            })
        )
    }, [])

    return (
    <div className='whole-container'> 
        <div className="main-container">
           <FaChevronLeft
           className="arrow"
           onClick={onLeftArrowClick}
           size={30}
           color={'#1B0773'}
           />
            <div className="window">
                <div className="all-items-container"
                style={
                    {
                        transform:`translateX(${move}vw)`,
                    }
                }
                >
                    {pages}
                </div>
            </div>
            <FaChevronRight
           className="arrow"
           onClick={onRightArrowClick}
           size={30}
           color={'#1B0773'}
           />
        </div>
      <div className="navs">{navs}</div>
    </div>
    );
};

export default Carousel;