import React, { useState } from 'react';
import { CommonCard } from '../../../Common/Cards/CommonCard';
import styles from './PickUp.module.scss';
import 'react-datepicker/dist/react-datepicker.css';
import { CommonButton } from '../../../Common/Button/CommonButton';
import CheckIcon from '@mui/icons-material/Check';
import DatePicker from 'react-datepicker';

const level=['Never played before', 'Beginner', 'InterMediate', 'Advanced', 'Pro'];
export const PickUpForm: React.FC = () => {
  const [sport, setSport] = useState('soccer');
  const [format, setFormat] = useState('5v5');
  const [location, setLocation] = useState('Local Park');
  const [datetime, setDatetime] = useState<Date | null>(new Date());
  const [skillLevel, setSkillLevel] = useState('Beginner');
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
    setSkillLevel(button);
  };

  const handleSportChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSport(event.target.value);
  };

  const handleFormatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFormat(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(event.target.value);
  };


  const handleDatetimeChange = (date: Date | [Date, Date] | null) => {
    setDatetime(date as Date);
  };

  const handleEdit = () => {
    console.log('Edit button clicked');
  };

  const handleSend = () => {
    console.log('Send button clicked');
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <div className={styles.title}>Organise Match</div>
        <div className={styles.subtitle}>Create a new pickup match</div>

        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="sportSelect">Sport</label>
          <select id="sportSelect" className={styles.select} onChange={handleSportChange} value={sport}>
            <option value="soccer">Soccer</option>
            <option value="basketball">Basketball</option>
            <option value="tennis">Tennis</option>
            <option value="volleyball">Volleyball</option>
            {/* Add more sports as needed */}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="formatSelect">Select format of play</label>
          <select id="formatSelect" className={styles.select} onChange={handleFormatChange} value={format}>
            <option value="5v5">5v5</option>
            <option value="7v7">7v7</option>
            <option value="11v11">11v11</option>
            {/* Add more formats as needed */}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="locationSelect">Location</label>
          <select id="locationSelect" className={styles.select} onChange={handleLocationChange} value={location}>
            <option value="Local Park">Local Park</option>
            <option value="Sports Complex">Sports Complex</option>
            <option value="School Field">School Field</option>
            {/* Add more locations as needed */}
          </select>
        </div>

        <div className={styles.field}>
          <label className={styles.fieldLabel} htmlFor="datetimeSelect">Day and Time</label>
          <div className={styles.select}>
            <DatePicker
              selected={datetime}
              onChange={handleDatetimeChange}
              showTimeSelect
              dateFormat="MMMM /d /yyyy | h:mm aa"
              className={styles.datepicker}
            />
          </div>
        </div>

        <label className={styles.fieldLabel} htmlFor="datetimeSelect">Select sports skill level</label>
        <div className={styles.buttonsContainer}>
          {level.map((button, index) => (
            <div key={index} className={`${styles.buttonWrapper} ${activeButton === button ? styles.active : ''}`}>
              {activeButton === button && <CheckIcon className={styles.tickIcon} sx={{ fontSize: 16 }} />}
              <button
                className={`${styles.button} ${activeButton === button ? styles.activeButton : ''}`}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </button>
            </div>
          ))}

        </div>

        <div className={styles.createbutton}>
          <CommonButton label='create' />
        </div>

      </div>
      <div className={styles.divider} />
          <div className={styles.card_Last}>
      <div>   
          <CommonCard
            sport={sport}
            format={format}
            location={location}
            datetime={datetime ? datetime.toLocaleString() : ''}
            skillLevel={skillLevel}
            onEdit={handleEdit}
            onSend={handleSend}
          />
        </div>
        </div>
      </div>
   
  );
};


