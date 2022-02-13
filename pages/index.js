import Head from 'next/head'
const BASE_URL = "https://cdn-api.co-vin.in/api/v2/";
const CITIES = [
 /* {
    "district_id": 154,
    "district_name": "Ahmedabad"
  },
  {
    "district_id": 770,
    "district_name": "Ahmedabad Corporation"
  },*/
  {
    "district_id": 174,
    "district_name": "Amreli"
  },
 /* {
    "district_id": 179,
    "district_name": "Anand"
  },
  {
    "district_id": 158,
    "district_name": "Aravalli"
  },
  {
    "district_id": 159,
    "district_name": "Banaskantha"
  },
  {
    "district_id": 180,
    "district_name": "Bharuch"
  },*/
  {
    "district_id": 175,
    "district_name": "Bhavnagar"
  },
  {
    "district_id": 771,
    "district_name": "Bhavnagar Corporation"
  },
  /*{
    "district_id": 176,
    "district_name": "Botad"
  },
  {
    "district_id": 181,
    "district_name": "Chhotaudepur"
  },
  {
    "district_id": 182,
    "district_name": "Dahod"
  },
  {
    "district_id": 163,
    "district_name": "Dang"
  },*/
  {
    "district_id": 168,
    "district_name": "Devbhumi Dwaraka"
  },
  /*{
    "district_id": 153,
    "district_name": "Gandhinagar"
  },
  {
    "district_id": 772,
    "district_name": "Gandhinagar Corporation"
  },*/
  {
    "district_id": 177,
    "district_name": "Gir Somnath"
  },
  {
    "district_id": 169,
    "district_name": "Jamnagar"
  },
  {
    "district_id": 773,
    "district_name": "Jamnagar Corporation"
  },
  {
    "district_id": 178,
    "district_name": "Junagadh"
  },
  {
    "district_id": 774,
    "district_name": "Junagadh Corporation"
  },
  /*{
    "district_id": 156,
    "district_name": "Kheda"
  },
  {
    "district_id": 170,
    "district_name": "Kutch"
  },
  {
    "district_id": 183,
    "district_name": "Mahisagar"
  },
  {
    "district_id": 160,
    "district_name": "Mehsana"
  },
  {
    "district_id": 171,
    "district_name": "Morbi"
  },
  {
    "district_id": 184,
    "district_name": "Narmada"
  },
  {
    "district_id": 164,
    "district_name": "Navsari"
  },
  {
    "district_id": 185,
    "district_name": "Panchmahal"
  },
  {
    "district_id": 161,
    "district_name": "Patan"
  },*/
  {
    "district_id": 172,
    "district_name": "Porbandar"
  },
  {
    "district_id": 173,
    "district_name": "Rajkot"
  },
  {
    "district_id": 775,
    "district_name": "Rajkot Corporation"
  },
  /*{
    "district_id": 162,
    "district_name": "Sabarkantha"
  },
  {
    "district_id": 165,
    "district_name": "Surat"
  },
  {
    "district_id": 776,
    "district_name": "Surat Corporation"
  },
  {
    "district_id": 157,
    "district_name": "Surendranagar"
  },
  {
    "district_id": 166,
    "district_name": "Tapi"
  },
  {
    "district_id": 155,
    "district_name": "Vadodara"
  },
  {
    "district_id": 777,
    "district_name": "Vadodara Corporation"
  },
  {
    "district_id": 167,
    "district_name": "Valsad"
  }*/
];
function formatData(data, dates) {
  const renderDatesHeader = dates.map(date => (<th>{date}</th>));
  const rows = [];
  data.forEach(datum => {
    const address = `${datum.name}
    ${datum.address}
    ${datum.block_name}
    ${datum.district_name}
    ${datum.pincode}`;
     const tr = dates.map(date => {
     const rec = datum.sessions.find((sess) => date === sess.date);
      return rec ? (<td>D1:{rec.available_capacity_dose1} D2:{rec.available_capacity_dose2}</td>) : (<td></td>);
    });
    rows.push(<tr key={datum.center_id}><td><address>{address}</address></td>{tr}</tr>);
});

  return {header: renderDatesHeader, rows};
}
export default function Home({data, dates}) {

  let header = "", rows = (<tr><td>No slots available.</td></tr>);
  if(data.length) {
    ({header, rows} = formatData(data, dates));
  }

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to cowin explorer
        </h1>
        <table>
          <thead>
            <tr>
              <th>Address</th>
              {header}
            </tr>
          </thead>
          <tbody>
           {rows}
          </tbody>
        </table>

      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

export async function getServerSideProps() {
  const cities = CITIES.map(({district_id}) => district_id);
  const date = new Date();
  const today = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  const res = await Promise.allSettled(cities.map((city) => fetch(`${BASE_URL}appointment/sessions/public/calendarByDistrict?district_id=${city}&date=${today}`, {mode: 'no-cors'})));

  const data = await Promise.allSettled(res.map(d =>  d.status === 'fulfilled' ? d.value.json() : null));
  const dates = [];
  const centers = data.map(({value}) => value.centers);
  const dataFilteredByAge = centers[0]?.filter(data => {
    const isSlotAvailable = data.sessions && data.sessions.some(
        ({available_capacity_dose2, min_age_limit, vaccine}) => min_age_limit === 18 && vaccine === "COVAXIN" && available_capacity_dose2 > 0
    );
    if(isSlotAvailable) {
        data.sessions.forEach(({date}) => { dates.push(date); });
    }
    return isSlotAvailable;
  });
  return {
    props: {
      data: dataFilteredByAge,
      dates: Array.from(new Set(dates))
    }, // will be passed to the page component as props
  }
}