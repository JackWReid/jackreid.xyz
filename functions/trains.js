import axios from 'axios';

const TRANSPORT_API_URL = 'http://transportapi.com/v3/uk/train';
const TRANSPORT_API_ID = process.env['TRANSPORT_API_ID'];
const TRANSPORT_API_KEY = process.env['TRANSPORT_API_KEY'];

exports.handler = async (event, context) => {
  const station =  event['queryStringParameters']['station'] || 'CTK';
  const url = `${TRANSPORT_API_URL}/station/${station}/live.json?app_id=${TRANSPORT_API_ID}&app_key=${TRANSPORT_API_KEY}`;
  const { data } = await axios.get(url);
  console.log('work');

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  };
}
