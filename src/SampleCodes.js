<div className="row loginCalendarNews">
  <div className="calender col-sm-3">
    <span className="calenderIcon glyphicon glyphicon-calendar"></span>
    <p>{calenderText}</p>
  </div>
  <div className="login col-sm-3">
    <span className="loginIcon glyphicon glyphicon-log-in"></span>
    <p>{loginText}</p>
  </div>
  <div className="col-sm-6 newsTile">
    <div className="newsVerticalScroll">
      <h2>{schoolNews}</h2>
      <Marquee />
    </div>
  </div>
</div>
