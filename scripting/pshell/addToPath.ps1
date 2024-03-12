($env:path).split(";")

$example = 'C:\Path\To\Desired\Var'

$newvar = 'C:\Users\AlexW\AppData\Roaming\Python\Python311\Scripts' 

$oldpath = (Get-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PATH).path

$newpath = "$oldpath;$newvar"

Set-ItemProperty -Path 'Registry::HKEY_LOCAL_MACHINE\System\CurrentControlSet\Control\Session Manager\Environment' -Name PATH -Value $newpath

