import React from 'react'
import { ReviewsArr } from './ReviewsArr'
import classes from '../Comment/Comment.module.scss'
const Reviews = ({show}) => {
    let comment = ReviewsArr
    
    if(show){
        comment = comment.concat(comment) 
        for(let i = 0; i < 4; i++){
            comment = comment.concat(ReviewsArr)
        }
    }
  return (
    <div className={classes.Reviews}>
            {comment.map((com) => (
                <div className={classes.CommentItem}>
                    <div className={classes.Commentheader}>
                        <div className={classes.nameDate}>
                            <h2 className={classes.revName}>{com.name}</h2>
                            <p className={classes.revDate} >{com.date}</p>
                        </div>
                        <div className={classes.PostRating}>
                            <h2 className={classes.revPost}>{com.post}</h2>
                            <p className={classes.revRating} >{com.Rating}</p>
                        </div>
                    </div>
                    <div className={classes.text}>
                        <p>{com.Text}</p>
                    </div>
                </div>
            ))}
    </div>
  )
}

export default Reviews