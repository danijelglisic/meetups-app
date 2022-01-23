import NewMeetupForm from '../components/meetups/NewMeetupForm';
import { useNavigate  } from 'react-router-dom';


function NewMeetupPage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        fetch(
            'https://meetup-app-e45ea-default-rtdb.firebaseio.com/metups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers:{
                    'Contet-Type': 'aplication/json'
                }
            }
        ).then(() => {
            navigate('/')
        } );
    }

    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </section>

}

export default NewMeetupPage;