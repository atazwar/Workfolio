import React, { useEffect, useState } from "react";
import './profileCardLayout.css'
import ProfileCard from './profileCard'
import { firestore } from "firebase";

const ProfileCardLayout = () => {
    const [users, setUsers] = useState(null);
    const [randUsers, setRandUsers] = useState(null);
    const [noOfUsers, setNoOfUsers] = useState(0);

    useEffect(() => {
        fetchUsers();
    }, [])

    //Function to retrive user data and determine random users to be displayed.
    const fetchUsers = () => {
        const db = firestore();
        db.collection("users")
          .get() 
          .then(snapshot => {
            const users = []
            snapshot.forEach(doc => {
                const data = doc.data()
                users.push(data);
                console.log(doc.image);
            })
            setUsers(users)
            setNoOfUsers(users.length);

            let randNum = 0;
            let randArray = [];
            //Choose 6 random users from list.
            for (var i=0; i < 6; i++) {
                randNum = Math.floor(Math.random() * users.length);
                randArray.push(users.splice(randNum,1));
            }
            randArray = [].concat.apply([], randArray);
            setUsers(randArray);
        }).catch(error => {
            console.log(error)
        });
    }

    //IGNORE CODE BELOW!!! WILL BE DELETED BEFORE RELEASED.
    // //Function pick 6 random users from user list.
    // const randomUsers = () => {
    //     // fetchUsers();
    //     let noCardsNeeded = 6;
    //     //Generate a sequence array for the number of users in the DB.
    //     let noOfUsersArray = Array.from(Array(noOfUsers).keys())
    //     //Variables to store random users.
    //     let randNum = 0;
    //     let randArray = []

    //     //Determine users that should be displayed.
    //     for (var i=0; i < noCardsNeeded; i++) {
    //         randNum = Math.floor(Math.random() * noOfUsersArray.length);
    //         randArray.push(noOfUsersArray.splice(randNum, 1));
    //     }

    //     randArray = [].concat.apply([], randArray);
    //     let randUsers = [];

    //     for (var j=0; j < randArray.length; j++) {
    //         randUsers.push(users[randArray[j]]);
    //     }
    //     setRandUsers(randUsers);
    //     console.log(randUsers);
    //     // return randUsers;
    // } 

    return (
        <>
        <h2 className="header">Meet other <u>like-minded</u> Professionals</h2>
        <ul className="layout">
            {
                users && 
                users.map(user => {
                    return (
                        <li className="card">
                            {/* {console.log(user.imageUrl)} */}
                            {user.imageUrl ? 
                                <ProfileCard className="cardStyle" name={user.fullname} occupation={user.occupation} imageUrl={user.imageUrl}/>
                            :  
                                <ProfileCard className="cardStyle" name={user.fullname} occupation={user.occupation}/>
                            }
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
}

export default ProfileCardLayout;
