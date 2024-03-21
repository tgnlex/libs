param(
[string]$dest
)
switch(%dest){
  "projects" {
    $projectsFolder = "C:\Users\AlexW\Desktop\work\projects"
    Set-Location $projectsFolder
    break
  }
 
  "web-projects" {
    $webFolder = "C:\Users\AlexW\Desktop\work\projects\web"
    Set-Location $webFolder
    break
  } 
  "py-projects" {
    $pyFolder = "C:\Users\AlexW\Desktop\work\projects\Python"
    Set-Location $pyFolder
    break
  }
  "rust-projects" {
    $rsFolder = "C:\Users\AlexW\Desktop\work\projects\rust"
    Set-Location $rsFolder
    break
  }
  "js-projects" {
    $jsFolder = "C:\Users\AlexW\Desktop\work\projects\web\javascript"
    Set-Location $jsFolder
    break
  }
  "react-projects" {
    $jsxFolder = "C:\Users\AlexW\Desktop\work\projects\web\react"
    Set-Location $jsxFolder
    break
  }
  "kits" {
    $kitsFolder = "C:\Users\AlexW\Desktop\work\kits"
    Set-Location $kitsFolder
    break
  }
  "scripts" {
    $scriptsFolder = "C:\Users\AlexW\Desktop\work\kits\scripting"
    Set-Location $scriptsFolder
    break
  }
  "python-kit" {
    $pythonFolder = "C:\Users\AlexW\Desktop\work\kits\general\python"
    Set-Location $pythonFolder
    break
  }
  "rust-kit" {
    $rustFolder = "C:\Users\AlexW\Desktop\work\kits\general\rust"
    Set-Location $rustFolder
    break
  } 
  "js-kit" {
    $jsFolder = "C:\Users\AlexW\Desktop\work\kits\web\javascript"
    Set-Location $jsFolder
    break
  }
  "react-kit" {
    $reactFolder = "C:\Users\AlexW\Desktop\work\kits\web\react"
    Set-Location $reactFolder
    break
  }
  "next-kit" {
    $nextFolder = "C:\Users\AlexW\Desktop\work\kits\web\next"
    Set-Location $nextFoldera
  } 
  "ts-kit" {
    $ts {
      $tsFolder = "C:\Users\AlexW\Desktop\work\kits\web\typescript"
      Set-Location $tsFolder
    }
  }
  "apache" {
    $apacheFolder = "C:\xampp\htdocs"
    Set-Location $apacheFolder
    break
  }

}
