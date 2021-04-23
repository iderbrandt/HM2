
-- Info om kyrkorna (Level 1)
select City.Name, BuiltYear, Church.Name 
from Church 
join City on Church.LocatedInCityId = City.id

-- Var invånarna bor (Level 2)
select * 
from Citizen 
join City on Citizen.LivesInCityId = City.Id

-- Vilka kyrkor invånarna gillar (Level 2)
select Citizen.Name, Church.Name, BuiltYear 
from Citizen 
join FavoriteChurch on Citizen.Id = FavoriteChurch.citizenid
join Church on FavoriteChurch.ChurchId = Church.Id

