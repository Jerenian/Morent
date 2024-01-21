import React from 'react'
import { ReviewsArr } from './ReviewsArr'
import classes from '../Comment/Comment.module.scss'
import { useEffect } from 'react'
import { star } from '../../../public/assets/stra'

const Reviews = ({show}) => {
    let comment = ReviewsArr

    if(show){
        comment = comment.concat(comment) 
        for(let i = 0; i < 4; i++){
            comment = comment.concat(ReviewsArr)
        }
        comment = comment.concat(ReviewsArr)
        comment.length = comment.length - 1
    }

  return (
    <div className={classes.Reviews}>
        <h2 className={classes.titleReviews}>Reviews <strong className={classes.strongStyle}>{comment.length}</strong></h2>
            {comment.map((com) => (
                <div className={classes.CommentItem}>
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
                                <p className={classes.revRating} >  </p>
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