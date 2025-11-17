import CardGlobal from "@/components/CardGlobal"
import ProfileTopPages from "../components/ProfileTopPages"

function Favorite() {
  return (
    <div className="p-4 lg:p-8 bg-white rounded-2xl border-custom">
      <ProfileTopPages title="محصولات مورد علاقه من" />
      <div className="profile-favorite-products gap-2 lg:gap-4 mt-4">
        {Array(12).fill(1).map((_, index) =>
          <CardGlobal key={index} />
        )}
      </div>
    </div>
  )
}

export default Favorite