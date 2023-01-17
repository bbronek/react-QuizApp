import CardList from './Cards/Card/CardList';
import styles from './Main.module.css';

const Categories = ['Film & TV', 'Food & Drink', 'Science',
                    'Music', 'Geography', 'Sport', 'Arts & Literature',
                    'General Knowledge', 'Society & Culture']
const Main = () => {
    return (
        <div>
            <p className={styles.text}><b>Select your Quiz category:</b></p>
            <CardList categoryList={Categories}/>

        </div>
    );
}

export default Main;