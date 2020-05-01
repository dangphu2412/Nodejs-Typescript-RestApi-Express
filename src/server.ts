import app from './app';

const PORT = app.get('port');
app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT} \n Enter Ctrl+C to exit`);
});