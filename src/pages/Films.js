import React, { useEffect, useState } from "react";
import styles from "../styleSheet/film.module.css";
import Card from '../component/Card_1'

const Films = () => {
  const [isGrid, setIsGrid] = useState(true);
  const api_url = "https://swapi.dev/api/films/";
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getapi(url) {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const fetchedData = await response.json();
        setData(fetchedData.results);
        console.log("Data is fetched.");
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    getapi(api_url);
  }, [data]);

  function setGrid() {
    setIsGrid(true);
  }
  function setTable() {
    setIsGrid(false);
  }

  return (
    <div className={styles.films}>
      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className={`modal-dialog modal-dialog-centered`}>
          <div className={`modal-content ${styles.modalContent}`}>
            <img src="./ficon.png" alt="no image found" className={styles.ficon} style={{ backgroundColor: "white" }}></img>
            <div style={{ backgroundColor: "white" }}>
              <h2 style={{ backgroundColor: "white" }}>Caution!</h2>
              <span style={{ backgroundColor: "white" }}>Are you sure want to delete this film</span>
            </div>

            <div className={styles.btnGroup} style={{ backgroundColor: "white" }}>
              <button
                type="button"
                className={`btn btn-secondary ${styles.cancel}`}
              >
                Cancel
              </button>
              <button
                type="button"
                className={`btn btn-secondary ${styles.yes}`}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className={styles.titleBar}>
        <h2>Films</h2>
        <div className={styles.displayButton}>
          <div onClick={setGrid} style={isGrid ? { backgroundColor: 'white', color: 'gray' } : { backgroundColor: 'transparent' }}>
            <img src="./fourdot.png" alt="no image found" style={isGrid ? { backgroundColor: "white" } : { backgroundColor: 'transparent' }}></img>
            <span style={isGrid ? { display: "", backgroundColor: 'white' } : { display: "none", backgroundColor: 'white' }}>Grid</span>
          </div>
          <div onClick={setTable} style={!isGrid ? { backgroundColor: 'white', color: 'gray' } : { backgroundColor: 'transparent' }}>
            <img src="./ham.png" style={{ backgroundColor: "transparent" }}></img>
            <span style={!isGrid ? { display: "", backgroundColor: 'transparent' } : { display: "none", backgroundColor: 'transparent' }}>List</span>
          </div>
        </div>
      </div>
      {isGrid && (
        <div className={styles.main}>
          {data &&
            data.map((curr, index) => {
              return <Card key={index} details={curr} />;
            })}
        </div>
      )}
      {!isGrid && (
        <div className={styles.mainTable}>
          <table>
            <tr>
              <th>Name</th>
              <th>Director</th>
              <th>Release Date</th>
              <th></th>
            </tr>
            {data &&
              data.map((curr, index) => {
                return (
                  <tr>
                    <td>
                      <img className={styles.reel} src="./reel.png"></img>
                      {curr.title}
                    </td>
                    <td>{curr.director}</td>
                    <td>{curr.release_date}</td>
                    <td className={styles.threeDot}><img src='./threedot.png' className={`${styles.more} dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false"></img>
                      <ul className={`dropdown-menu`}>
                        <li style={{ backgroundColor: "white" }}><a className={`dropdown-item ${styles.menuItem}`} href='#'><img src='./view.png' style={{ backgroundColor: "white" }}></img>View</a></li>
                        <li style={{ backgroundColor: "white" }}><a className={`dropdown-item ${styles.menuItem}`} href='#'><img src='./download.png' style={{ backgroundColor: "white" }}></img>Download</a></li>
                        <li style={{ backgroundColor: "white" }}><a className={`dropdown-item ${styles.menuItem}`} href='#'><img src='./rename.png' style={{ backgroundColor: "white" }}></img>Rename</a></li>
                        <li style={{ backgroundColor: "white" }}><a className={`dropdown-item ${styles.menuItem}`} href='#'><img src='./share.png' style={{ backgroundColor: "white" }}></img>Share link</a></li>
                        <li style={{ backgroundColor: "white" }}><a className={`dropdown-item ${styles.menuItem}`} href='#'><img src='./move.png' style={{ backgroundColor: "white" }}></img>Move</a></li>
                        <li style={{ backgroundColor: "white" }}><a className={`dropdown-item ${styles.menuItem}`} href='#'><img src='./markprivate.png' style={{ backgroundColor: "white" }}></img>Mark private</a></li>
                        <li style={{ backgroundColor: "white" }}><a className={`dropdown-item ${styles.delete} ${styles.menuItem}`} data-bs-toggle="modal" data-bs-target="#exampleModal"><img src='./delete.png' style={{ backgroundColor: "white" }}></img>Delete</a></li>
                      </ul></td>
                  </tr>
                );
              })}
          </table>
        </div>
      )}
    </div>
  );
};

export default Films;
