import React, { startTransition, useEffect } from 'react'
import { ReviewsArr } from './ReviewsArr'
import classes from '../Comment/Comment.module.scss'
import { useRef } from 'react'
import { RatingArr } from '../CarArray'

const Reviews = ({show}) => {
    let comment = ReviewsArr
    if(show){
        comment = comment.concat(comment) 
        for(let i = 0; i < 4; i++){
            comment = comment.concat(ReviewsArr)
        }
        comment = comment.concat(ReviewsArr)
        comment.length = comment.length - 1
        window.location.href = `#${comment.length - 2}`
    }
    else{
        window.location.href = `#1`
    }


  return (
    <div id='title' className={classes.Reviews}>
        <h2 className={classes.titleReviews}>Reviews <strong className={classes.strongStyle}>13</strong></h2>
            {comment.map((com, i) => (
                <div id={i} className={classes.CommentItem}>
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
    </div>
  )
}

export default Reviews