import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { urlConfig } from '../../config';
import { useAppContext } from '../../context/AppContext';

function MainPage() {
  const [items, setItems] = useState([]);
  const navigate = useNavigate();
  const { isLoggedIn } = useAppContext();

  useEffect(() => {
    fetch(`${urlConfig.backendUrl}/api/secondchance/items`)
      .then(res => res.json())
      .then(data => {
        // Accept both array and {items: [...]}
        setItems(Array.isArray(data) ? data : data.items || []);
      })
      .catch(e => {
        setItems([]); // Show empty list on error
        console.log('Fetch error', e);
      });
  }, []);

  const goToDetailsPage = (itemId) => {
    navigate(`/app/item/${itemId}`);
  };

  return (
    <div className="container mt-5">
      <h2>Items List</h2>
      <div className="row">
        {items.length === 0 && (
          <div>No items found.</div>
        )}
        {items.map((item) => (
          <div key={item.id || item._id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5>{item.name}</h5>
                <p>{item.condition}</p>
                <button onClick={() => goToDetailsPage(item.id || item._id)} className="btn btn-primary">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainPage;
