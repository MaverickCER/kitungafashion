import {useEffect, useRef, useState} from 'react';

const GoogleForm = () => {
  const formRef = useRef(null);
  const scriptUrl =
    'https://script.google.com/macros/s/AKfycbwvt94l59QPh3emhffdYI-ZRux1PP-VtBLkoBPs9wZiy-9ojPUCxGUkO3WTzqQX_CSnpA/exec';
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const submitted = sessionStorage.getItem('kfSubmitted');
    setSuccess(submitted === 'true');
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch(scriptUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: new FormData(formRef.current),
    })
      .then((res) => {
        sessionStorage.setItem('kfSubmitted', 'true');
        setSuccess(true);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  };

  return (
    <div className="form-wrapper">
      <div className="form-ornament">
        <iframe
          src="https://player.vimeo.com/video/763949487?h=20a748315e?autoplay=1&loop=1&muted=1&background=1"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        />
      </div>
      <span className="form">
        <div className="container">
          {!success ? (
            <form ref={formRef} onSubmit={handleSubmit} name="google-sheet">
              <div className="input-style">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="" />
              </div>
              <div className="input-style">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="" />
              </div>
              <div className="input-style">
                <label htmlFor="reason">Reason</label>
                <select name="reason">
                  <option value="other">Other</option>
                  <option value="collaboration">Collaboration</option>
                  <option value="delivery">Delivery</option>
                  <option value="media">Media</option>
                  <option value="shipping">Shipping</option>
                </select>
              </div>
              <div className="input-style">
                <label htmlFor="order">Order Number (If available)</label>
                <input type="text" name="order" placeholder="" />
              </div>
              <div className="input-style">
                <label htmlFor="message">Message</label>
                <input type="textarea" name="message" placeholder="" />
              </div>
              <div className="input-style">
                <input
                  disabled={loading}
                  type="submit"
                  value={loading ? 'Loading...' : 'SEND MESSAGE'}
                />
              </div>
            </form>
          ) : (
            <div>Thank you!</div>
          )}
        </div>
      </span>
    </div>
  );
};

export default GoogleForm;
