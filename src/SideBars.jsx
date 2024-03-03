function SideBars({selectedTab,setSelectedTab}){

    const handleOnClick=(tabName)=>{
        setSelectedTab(tabName);
    }
    return <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark sidebars" style={{width: "280px",height: "598px"}}>
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" previewlistener="true">
      <svg class="bi pe-none me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
      <span class="fs-4">Password Manager</span>
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item" onClick={()=>{handleOnClick("Home")}}>
        <a href="#" class={`nav-link text-white ${selectedTab==="Home" && "active"}`} aria-current="page">
          <svg class="bi pe-none me-2" width="16" height="16"><use xlinkHref="#home"></use></svg>
          Home
        </a>
      </li>
      <li onClick={()=>{handleOnClick("Saved passwords")}}>
        <a href="#" class={`nav-link text-white ${selectedTab==="Saved passwords" && "active"}`}>
          <svg class="bi pe-none me-2" width="16" height="16"><use xlinkHref="#speedometer2"></use></svg>
          Saved passwords
        </a>
      </li>
    </ul>
    <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="/IMG_2501.JPG" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>user</strong>
      </a>
    </div>
  </div>
}

export default SideBars;