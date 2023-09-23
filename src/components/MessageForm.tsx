import React, { useState, ChangeEvent, FormEvent } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { useServicesContext } from '../services/ServicesContext';
import Spinner from './Spinner';


const MessageForm: React.FC = () => {

  const {apiService} = useServicesContext();

  const [message, setMessage] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('sugestao');
  const [isSendingMessage, setIsSendingMessage] = useState<boolean>(false);

  const handleSuggestionChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setMessage(e.target.value);
  };

  const handleOptionChange = (
    e: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedType(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    // Handle form submission here (e.g., sending data to a server)
    console.log('Suggestion submitted:', message);
    console.log('Selected option:', selectedType);
    setIsSendingMessage(true);
    const response = await apiService.sendMessage(message, selectedType);
    console.log('Selected response:', response);

    alert('Mensagem enviada.')
    setIsSendingMessage(false);
  };

  const handleHello = (): void => {
    apiService.getHello();
  };

  const handleSize = (): void => {
    apiService.getQueueSizes();
  };

  if(isSendingMessage) return <Spinner />;

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        Suggestion Form
      </Typography>
      <form onSubmit={handleSubmit}>
          <Grid item xs={12}>
            <RadioGroup
              aria-label="Feedback"
              name="feedback"
              value={selectedType}
              onChange={handleOptionChange}
            >
              <FormControlLabel
                value="Suggestion"
                control={<Radio />}
                label="Sugestão"
              />
              <FormControlLabel
                value="Criticism"
                control={<Radio />}
                label="Crítica"
              />
              <FormControlLabel
                value="Praise"
                control={<Radio />}
                label="Elogio"
              />
            </RadioGroup>
          </Grid>
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={4}
              label="Mensagem"
              variant="outlined"
              value={message}
              onChange={handleSuggestionChange}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
      <Button onClick={handleHello}>Hello</Button>
      <Button onClick={handleSize}>Size</Button>
    </Container>
  );
};

export default MessageForm;
