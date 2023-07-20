import { useState } from "react";
// hooks aniada ciertas funcionalidad a los componentes de react
// o poder ejecutar codigo arbitratio cuando ocurre ciertas cosas en los
// componentes
//o tener algun tipo de funcionalidad de mejorar el rendiemiento del
//componente
export function TwitterFollowCard({ formatUserName, userName, children, initialIsFollowing}) {
  //guardando la variable
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const text = isFollowing ? "Siguiendo" : "Seguir";
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="El avatar de midudev"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopfollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
}
