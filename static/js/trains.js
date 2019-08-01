const trainBoard = ({ station_name, station_code, departures }) => `
  <section class="train-board">
    <h3 class="train-board">${station_name} (${station_code.toUpperCase()})</h3>
    ${departuresList(departures)}
  </section>
`;

const departuresList = departures => `
  <table class="train-board__list">
    <thead class="train-board__list-header">
      <th>Time</th>
      <th>Destination</th>
      <th>Platform</th>
      <th>Expected</th>
    </thead>
    <tbody>
    ${departures.all.map(departureListItem).join('')}
    </tbody>
  </table>
`;

const departureListItem = ({
  platform,
  operator_name,
  aimed_departure_time,
  destination_name,
  status,
  expected_departure_time
}) => `
  <tr class="train-board__list-item ${status === 'LATE' && 'train-board__list-item--late'}">
    <td>${aimed_departure_time}</td>
    <td>${destination_name}</td>
    <td>${platform}</td>
    <td>${status === 'LATE' ? expected_departure_time : ''}</td>
  </tr>
`;

const attachToDOM = (html, node) => {
  node.innerHTML = html;
}

(async () => {
  async function fetchStationData(stationCode) {
    const url = `/.netlify/functions/trains?station=${stationCode}`;
    const data = await fetch(url).then(d => d.json());
    return data;
  }

  async function main() {
    const node = document.querySelector('#trains');
    if (!node) {
      return;
    }

    const station = new URLSearchParams(document.location.search).get('station') || 'CTK';
    const data = await fetchStationData(station);
    const html = trainBoard(data);

    return attachToDOM(html, node);
  }
  main();
})();

