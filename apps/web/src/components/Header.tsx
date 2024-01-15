import React from 'react';

export const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-brand">eventLive</div>
      <div className="navbar-buttons">
        <button>Find Events</button>
        <div className="dropdown">
          <button className="dropbtn">Event Types</button>
          <div className="dropdown-content">
            <button>Music</button>
            <button>Food & Drinks</button>
            <button>Arts</button>
            <button>Charity</button>
            <button>Festivals</button>
            <button>Retails</button>
          </div>
        </div>
        <button>Create Events</button>
        <button>Log In</button>
        <button>Sign Up</button>
      </div>
    </div>
  );
};

// import React from 'react';
// import Link from 'next/link';

// export const Header = () => {
//   return (
//     <div className="navbar">
//       <div className="navbar-brand">eventLive</div>
//       <div className="navbar-buttons">
//         <button>Find Events</button>
//         <div className="dropdown">
//           <button className="dropbtn">Event Types</button>
//           <div className="dropdown-content">
//             <button>Music</button>
//             <button>Food & Drinks</button>
//             <button>Arts</button>
//             <button>Charity</button>
//             <button>Festivals</button>
//             <button>Retails</button>
//           </div>
//         </div>
//         <button>Create Events</button>

//         {/* Updated Log In link with legacyBehavior */}
//         <Link href="/login" legacyBehavior>
//           <a className="login-button">Log In</a>
//         </Link>

//         <button>Sign Up</button>
//       </div>
//     </div>
//   );
// };
