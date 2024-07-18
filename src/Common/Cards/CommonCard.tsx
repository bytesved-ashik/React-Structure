import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import './CustomCard.scss';

interface CommonCardProps {
  sport: string;
  format: string;
  location: string;
  datetime: string;
  skillLevel: string;
  onEdit: () => void;
  onSend: () => void;
}

export const CommonCard: React.FC<CommonCardProps> = ({ sport, format, location, datetime, skillLevel, onEdit, onSend }) => {
  return (
    <>
      <h3 className='card-header'>Your Organised Match</h3>
      <Card className="custom-card">
        <div className="header">
          <Typography >Sport: <span className="title">{sport}</span></Typography>
          <Typography>Select format of play: <span className="title"> {format} </span></Typography>
          <Typography>Location: <span className="title1">{location}</span> </Typography>
          <Typography>Day and time: <span className="title">{datetime}</span> </Typography>
          <Typography>Skill level: <span className="title"> {skillLevel}</span></Typography>
          <DoneAllIcon className="tick-icon" fontSize="large" />
        </div>
     
        <CardActions className="custom-actions">
          <Button onClick={onEdit} variant='outlined' className="custom-button">Edit</Button>
          <Button onClick={onSend} variant='contained' color='primary' className="custom-button">Send</Button>
        </CardActions>
      </Card>
    </>
  );
};

