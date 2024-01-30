import React, { startTransition, useEffect } from 'react'
import { ReviewsArr } from './ReviewsArr'
import classes from '../Comment/Comment.module.scss'
import { useRef } from 'react'
import { RatingArr } from '../CarArray'

const Reviews = ({show}) => {
    let a = document.querySelector('#title')
    const ref = useRef()
    let comment = ReviewsArr
    if(show){
        comment = comment.concat(comment) 
        for(let i = 0; i < 4; i++){
            comment = comment.concat(ReviewsArr)
        }
        comment = comment.concat(ReviewsArr)
        comment.length = comment.length - 1
        let a = '#11'
        setTimeout(ref.current.scrollIntoView(true), 1500)
    }
    
    


  return (
    <div id='title' className={classes.Reviews}>
        <h2 className={classes.titleReviews}>Reviews <strong className={classes.strongStyle}>13</strong></h2>
            {comment.map((com, i) => (
                <div ref={ref} id={i} className={classes.CommentItem}>
                    <div className={classes.ReviewsPhoto}>
                        <img src={com.src} alt="" />
                    </div>
                    <div className={classes.RevContainer}>
                        <div className={classes.Commentheader}>
                            <div className={classes.nameDate}>
                                <h2 className={classes.revName}>{com.name}</h2>
                                <p className={classes.revDate} >{com.date}</p>
                            </div>
                            <div className={classes.PostRating}>
                                <h2 className={classes.revPost}>{com.post}</h2>
                                <p className={classes.revRating} >{RatingArr}</p>
                            </div>
                        </div>
                        <div className={classes.Revtext}>
                            <p>{com.Text}</p>
                        </div>
                    </div>
                </div>
            ))}
            <em id='l'>eeee</em>
    </div>
  )
}

export default Reviews