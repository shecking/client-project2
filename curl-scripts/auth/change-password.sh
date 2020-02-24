curl "https://rails-api-project2.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords": {
      "old": "'"${OLDPASSWORD}"'",
      "new": "'"${NEWPASSWORD}"'"
    }
  }'

echo
