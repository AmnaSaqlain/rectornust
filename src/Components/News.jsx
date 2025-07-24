import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const News = () => {
  const newsData = [
    { img: 'news1.png', title: 'NUST strengthens ties with Nankai University, China' },
    { img: 'news2.png', title: 'Rector NUST Visits College of EME' },
    { img: 'news3.png', title: 'Rector NUST Calls for Equitable Digital Ecosystem at SCO Forum 2025' },
    { img: 'news4.png', title: 'Rector NUST Visits NUST Military College of Signals' },
    { img: 'news5.png', title: 'NUST Advances Medical Policy Reforms to Support Employee Welfare' },
    { img: 'news6.png', title: 'Rector NUST Hosts LSE’s Dr Alexander Evans for a Dialogue on Geopolitics & Institutional Collaboration' }
  ];
  const navigate = useNavigate();
  return (
    <section className="container my-5 bg-white mb-0 pb-2">
      <h2 className="fw-bold text-center mb-4">NEWS & EVENTS</h2>

      <div className="row" >
        {newsData.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card h-100 shadow-sm border-0">
              <img
                src={`/images/${item.img}`}
                alt={item.title}
                className="card-img-top "
                style={{ height: '200px', objectFit: 'cover', color: 'rgba(0, 59, 110, 0.98)' }} 
              />
              <div className="card-body">
                <h6 className="text-primary mb-0">
                  <Link to="/" className="text-decoration-none" style={{ color: 'rgba(0, 59, 110, 0.98)' }}>
                    {item.title}
                  </Link>
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>

     <div className="d-flex justify-content-center mt-3">
  <button className="btn btn-warning text-dark px-4" onClick={() => navigate('/Events')}>View All News</button>
</div>

    </section>
  );
};

export default News;
