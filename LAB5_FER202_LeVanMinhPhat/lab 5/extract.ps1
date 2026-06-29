Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$docx = Get-ChildItem "d:\HOC\FER202\*.docx" | Where-Object { $_.Name -like "*16_06*" } | Select-Object -First 1
Write-Host "Copying $($docx.FullName)"
$tempDocx = "d:\HOC\FER202\temp_extracted\temp.docx"
Copy-Item $docx.FullName $tempDocx -Force
$zip = [System.IO.Compression.ZipFile]::Open($tempDocx, [System.IO.Compression.ZipArchiveMode]::Read)
$entry = $zip.GetEntry("word/document.xml")
if ($entry) {
    $entryStream = $entry.Open()
    $reader = [System.IO.StreamReader]::new($entryStream)
    $xmlText = $reader.ReadToEnd()
    $reader.Close()
    $entryStream.Close()
    $zip.Dispose()
    Remove-Item $tempDocx -Force
    $matches = [regex]::Matches($xmlText, '<w:t.*?>(.*?)</w:t>')
    $text = $matches | ForEach-Object { $_.Groups[1].Value }
    $text -join "`r`n" | Out-File "d:\HOC\FER202\temp_extracted\word_text_16_06.txt" -Encoding utf8
    Write-Host "Success"
} else {
    $zip.Dispose()
    Remove-Item $tempDocx -Force
    Write-Host "word/document.xml not found"
}
