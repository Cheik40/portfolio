const Experience = ({ title, company, date, description }) => {
    return (
        <div className='experience'>
            <div className='experience-header'>
                <h2>{title}</h2>
                <h3>{company}</h3>
                <p className='date'>{date}</p>
            </div>
            <p className='description'>{description}</p>
        </div>
    );
};

export default Experience;
